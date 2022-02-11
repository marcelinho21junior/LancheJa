import React from 'react'
import {Link} from 'react-router-dom'

import apiTelaClienteHome from '../../services/api';
import {getToken,logout} from '../../services/auth'

//CSS
import './TelaClienteHome.css'


//imagens
import imgCardsDesconto from '../../img/imgCardsDescontos.JPG'
import imgCardsPromocao from '../../img/imgCardsPromocao.JPG'
import imgCardsVendedores from '../../img/imgCardsVendedores.JPG'
import imgCliente from '../../img/imgcliente2.JPG'

export default function TelaClienteHome() {

    async function confirmSair() {
        if(window.confirm("Deseja realmente sair do sistema?")){
            const response = await apiTelaClienteHome.get('/cliente/logout',{headers:{token:getToken()}});
            if(response.status===200){
                logout();
                window.location.href='/Login'
            }else{
                alert("Não foi possivel fazer o logout")
            }
        }
    }

    return(
        <div className='ContainerTelaCLienteHome'>
            {/*titulo CSS VEM DA PAGINA INICIO.CSS*/}
            <div className='tituloInicio'>
                <span className='TxttituloInicio'>LancheJá</span>  
            </div>
            <div className='TelaCLienteHomeMenuEbemVindo'>
                <div className='TelaCLienteHomeIconeMenu'>
                    <div className='TelaCLienteHomeIconeMenuNAV'>
                        <button className='TelaCLienteHomeIconeMenuNAVBotao'>MENU</button>
                        <div className='TelaCLienteHomeIconeMenuNAVMenu'>
                            <Link to='' className='TelaCLienteHomeIconeMenuNAVMenuWord'><p>Home</p></Link>
                            <Link to='' className='TelaCLienteHomeIconeMenuNAVMenuWord'><p>Carrinho</p></Link>
                            <Link to='' className='TelaCLienteHomeIconeMenuNAVMenuWord'><p>Meus favoritos</p></Link>
                            <Link to='/LoginVendedor' className='TelaCLienteHomeIconeMenuNAVMenuWord'><p> Quero abrir minha Lanchonete</p></Link>
                           <Link to='' onClick={confirmSair} className='TelaCLienteHomeIconeMenuNAVMenuWord'><p>Sair</p></Link>
                        </div>                   
                    </div>
                </div>
                <div className='TelaCLienteHomebemVindo'>
                    Bem Vindo {}
                </div>
            </div>

            {/*CARD GRANDE CENTRAL DE EXPLICAÇAO*/}
            <div className='TelaCLienteHomeCardGrandeCentral'>
                <h3>ola fulano</h3>
            </div>


            {/*3 CARDS PROMOCAO VENDEDORES DESCONTOS CSS VEM DA PAGINA INICIO.CSS*/}
            {/*IMG CARDS*/}
            <div className='ImgCards'>
                <div className='ImgCardsCARD'>
                    <img src={imgCardsDesconto} alt=''  className='ImgCardsCARDImg'/>
                </div>
                <div className='ImgCardsCARD'>
                    <img src={imgCardsPromocao} alt='' className='ImgCardsCARDImg'/>
                </div>
                    <div className='ImgCardsCARD'>
                    <img src={imgCardsVendedores} alt='' className='ImgCardsCARDImg'/>
                </div>
            </div>{/*FINAL IMAGEM CARDS*/}

            <div className='TelaClienteHomePesquisarProdutos'>
                <h2>Pesquisar produtos</h2>
                <div className='TelaClienteHomePesquisarProdutos2inputs'>
                    <input type='text' className='TelaClienteHomePesquisarProdutosinput'/>
                    <input type='number' className='TelaClienteHomePesquisarProdutosinput'/>
                </div>
                {/*cards*/}
                <div className='TelaClienteHomeTodosCards'>
                    <div className='TelaClienteHomeCardsUnico'>
                        <h3>Brigadeiro Gourmet</h3>
                        <h2>R$ 5,00</h2>
                        <div>
                            Brigadeiro do seu Zé
                        </div>
                        <div>
                            12 5555 5555 
                        </div>
                    </div>

                    <div className='TelaClienteHomeCardsUnico'>
                        <h3>Brigadeiro Gourmet</h3>
                        <h2>R$ 5,00</h2>
                        <div>
                            Brigadeiro do seu Zé
                        </div>
                        <div>
                            12 5555 5555 
                        </div>
                    </div>

                    <div className='TelaClienteHomeCardsUnico'>
                        <h3>Brigadeiro Gourmet</h3>
                        <h2>R$ 5,00</h2>
                        <div>
                            Brigadeiro do seu Zé
                        </div>
                        <div>
                            12 5555 5555 
                        </div>
                    </div>
                </div>
            </div>
    

            {/*CARROUSEL DAS CATEGORIAS*/}
            <div className='TelaCLienteHomeCarrouselCategorias'>
                <div className='TelaCLienteHomeCarrouselTema'>
                    <spam>CONHEÇA NOSSOS APERITIVOS DE NOSSAS CANTINAS</spam>
                </div>
                <div className='TelaCLienteHomeCarrouselCategoriasOpçoes'>
                    CARROUSEL
                </div>
            </div>
            

            {/*CARDS DOS VENDEDORES*/}
            <div className='TelaClienteHomeCardsVendedores'>
                <div className=''>
                    LANCHONETES DE SUA CIDADE
                </div>
                <div className='TelaClienteHomeCards'>
                    <div className=''>
                        <img src={imgCliente} alt=''  className='TelaClienteHomeCardsimagem'/>
                    </div>
                    <div className='TelaClienteHomeCardsInfoImagem'>
                        <spam><strong>Ponto da Coxinha</strong></spam>
                        <spam>Lorena</spam>
                        <spam>R$5,00</spam>
                    </div>
                </div>
            </div>

        </div>
    )
}