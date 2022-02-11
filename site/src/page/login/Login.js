import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api';
import {login} from '../../services/auth'

//css
import './Login.css'

//imagens
import lancheloginLancheja from '../../img/lancheloginLancheja.jpg'

export default function Login() {

  const[email,setEmail] = useState('');
  const[senha,setSenha] = useState('');

  async function handSubmit(){
    await api.post('/cliente/login',{email,senha})
    .then(res=>{
      if(email==='' || senha===''){
        alert("Bem vindo!\nPor favor, preencha todos os dados!")
      }

      if(res.status===200){
        if(res.data.status===1){
          login(res.data.token);
          window.location.href='/TelaClienteHome';
        }
      }else if(res.data.status===2){
        alert('Atenção'+res.data.error)
      }else{
        alert('Erro no servidor!')
      }
    })
  }

  return (
    <div className='containerTODOlogin'>
      {/*titulo CSS vem do css do quem somos*/}
      <div className='tituloQuemSomosCorLaranja'>
        <div className='tituloQuemSomos'>
          <div>
            <Link to='/' className='linkLanchejalogin'>
              <span className='TxttituloQuemSomosLancheJá'>LancheJá</span>
            </Link>
          </div>
          <div>
            <span className='TxttituloQuemSomos'>Login</span>
          </div>
        </div>
      </div>

      {/*CONTEUDO: IMAGEM E LOGIN*/}
      <div className='ContainerLogin'>
        <div className='ContainerLoginIMG'>
          <img src={lancheloginLancheja} alt=''  className='' width='100%' height='100%'/>
        </div>
        
        <div className='ContainerLoginLOGIN'>
        
          <div className='ContainerLoginLOGINInputeMSG'>
            <spam>Email</spam>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)} className='ContainerLoginLOGINInput'/>
          </div>

          <div className='ContainerLoginLOGINInputeMSG'>
            <spam>Senha</spam>
            <input type='text' value={senha} onChange={e=>setSenha(e.target.value)} className='ContainerLoginLOGINInput'/>
          </div>

          <div className='ContainerLoginNaoPossuoCadastroEsqueciSenha'>
            <Link to='/CadastroInicial' className='linkLanchejalogin'>
              <p>Não possuo cadastro!</p>
            </Link>
            <Link className='linkLanchejalogin'>
              <p>Esqueci a senha!</p>
            </Link>  
          </div>

          <div className='ContainerLoginBtn'>
            <button className='ContainerLoginBtnBotao' onClick={handSubmit}>Entrar</button>
          </div> 
        </div>
      </div>
    </div>
  );
}


