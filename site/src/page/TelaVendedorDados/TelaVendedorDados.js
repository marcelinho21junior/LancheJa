import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import './TelaVendedorDados.css'

//api
import api from '../../services/api'

export default function TelaVendedorDados() {

  const [descricao,setdescricao] = useState('');
  const [categoria,setcategoria] = useState('');
  const [localizacao,setlocalizacao] = useState('');
  const [qtdeestoque,setqtdeestoque] = useState('');
  const [observacao,setobservacao] = useState('');
  const [precovenda,setprecovenda] = useState('');
  const [imagem,setimagem] = useState('');

  async function dadosVendedor(){
    const data = {
      descricao:descricao,
      categoria:categoria,
      localizacao:localizacao,
      qtdeestoque:qtdeestoque,
      observacao:observacao,
      precovenda:precovenda,
      imagem:imagem}

      if(descricao==='' || categoria==='' || localizacao==='' || qtdeestoque==='' ||  observacao==='' ||  precovenda==='' ||  imagem===''){
        alert("Bem vindo!\nPor favor, preencha todos os dados!")
        console.log(data)
    }else{
        const response = await api.post('/DadosVendedor',data);
        if(response.status===200){
          alert('Bem vindo!\nCadastro realizado com sucesso no BD!')
          console.log(data)
        }else{
          alert('erro ao cadastrar o usuario')
        }
      }
    }

    return(
    <div className='ContainerTelaVendedorDados'>
 
        {/*HEADER COMEÇO DA PAGINA --- CSS VEM DO CSS DO TELAVENDEDORDADOS*/}    
        <div className='HeaderTelasVendedor'>
            <span className='HeaderTelasVendedorLancheJa'>LancheJá</span>
            <span className='HeaderTelasVendedorSair'>-Sair</span>
        </div> 

        {/*botoes COMEÇO DA PAGINA --- CSS VEM DO CSS DO TELAVENDEDORDADOS*/}  
        <div className='ContainerTelaVendedorDadosBotoesMenu'>
            <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                <Link to='/TelaVendedorDados' className='ContainerTelaVendedorDadosBotoesMenuBTNbotaoSelecionado'>Dados</Link>
            </div>
            <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                <Link to='/TelaVendedorProdutosCadastrados' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Produtos Cadastrados</Link>
            </div>
            <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                <Link to='/TelaVendedorPedidosPendentes' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Pedidos Pendentes</Link>
            </div>
            <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                <Link to='/TelaVendedorVendas' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Vendas</Link>
            </div>
        </div>  
        
        {/*conteudo unico da pagina*/}
        <div className='ContainerTelaVendedorDadosCadastroConteudos'>
            <div className='TelaVendedorDadosCadastroConteudos'>
                <div className='TelaVendedorDadosCadastroConteudosTODOSINPUTS'>
                    <div className='TelaVendedorDadosCadastroConteudosPeInput'>
                        <p className='TelaVendedorDadosCadastroConteudosP'>Descriçao</p>
                        <input type='text' name='descricao' value={descricao} onChange={e => setdescricao(e.target.value)} className='TelaVendedorDadosCadastroConteudosINPUT'/>
                    </div>
                    <div className='TelaVendedorDadosCadastroConteudosPeInput'>
                        <p className='TelaVendedorDadosCadastroConteudosP'>Categoria</p>
                        <input type='text' name='categoria' value={categoria} onChange={e => setcategoria(e.target.value)} className='TelaVendedorDadosCadastroConteudosINPUT'/>
                    </div>
                    <div className='TelaVendedorDadosCadastroConteudosPeInput'>
                        <p className='TelaVendedorDadosCadastroConteudosP'>Localização</p>
                        <input type='text' name='localizacao' value={localizacao} onChange={e => setlocalizacao(e.target.value)}  className='TelaVendedorDadosCadastroConteudosINPUT'/>
                    </div>
                    <div className='TelaVendedorDadosCadastroConteudosPeInput'>
                        <p className='TelaVendedorDadosCadastroConteudosP'>Qtde Estoque</p>
                        <input type='number' name='qtdeestoque' value={qtdeestoque} onChange={e => setqtdeestoque(e.target.value)}  className='TelaVendedorDadosCadastroConteudosINPUT'/>
                    </div>
                    <div className='TelaVendedorDadosCadastroConteudosPeInput'>
                        <p className='TelaVendedorDadosCadastroConteudosP'>Observação</p>
                        <input type='text' name='observacao' value={observacao} onChange={e => setobservacao(e.target.value)} className='TelaVendedorDadosCadastroConteudosINPUT'/>
                    </div>
                </div>

                <div>
                    <div className='TelaVendedorDadosCadastroConteudosPeInput'>
                        <p className='TelaVendedorDadosCadastroConteudosP'>Preço venda(Un)</p>
                        <input type='number' name='precovenda' value={precovenda} onChange={e => setprecovenda(e.target.value)} className='TelaVendedorDadosCadastroConteudosINPUT'/>
                    </div>
                    <div className='TelaVendedorDadosCadastroConteudosPeInput'>
                        <p className='TelaVendedorDadosCadastroConteudosP'>Imagem</p>
                        <input type='text' name='imagem' value={imagem} onChange={e => setimagem(e.target.value)} className='TelaVendedorDadosCadastroConteudosINPUT'/>
                    </div>
                    <button className='TelaVendedorDadosCadastroConteudosBOTAO' onClick={dadosVendedor} >CADASTRAR</button>
                </div> 
            </div>
            
        </div>
    </div>
    )
}