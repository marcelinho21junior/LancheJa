import React from 'react'
import {Link} from 'react-router-dom'

//css
import '../TelaVendedorDados/TelaVendedorDados.css'
import './TelaVendedorProdutosCadastrados.css'  

//imagens
import coxinha from '../../img/imgvendedor2.JPG'

function TelaVendedorProdutosCadastrados({data}) {

    return(
        <div className='TelaVendedorProdutosCadastrados'>
            {/*HEADER COMEÇO DA PAGINA --- CSS VEM DO CSS DO TELAVENDEDORDADOS*/}    
            <div className='HeaderTelasVendedor'>
                <span className='HeaderTelasVendedorLancheJa'>LancheJá</span>
                <span className='HeaderTelasVendedorSair'>-Sair</span>
            </div> 

            {console.log(data)}

            {/*botoes COMEÇO DA PAGINA --- CSS VEM DO CSS DO TELAVENDEDORDADOS*/}  
            <div className='ContainerTelaVendedorDadosBotoesMenu'>
                <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                    <Link to='/TelaVendedorDados' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Dados</Link>
                </div>
                <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                    <Link to='/TelaVendedorProdutosCadastrados' className='ContainerTelaVendedorDadosBotoesMenuBTNbotaoSelecionado'>Produtos Cadastrados</Link>
                </div>
                <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                    <Link to='/TelaVendedorPedidosPendentes' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Pedidos Pendentes</Link>
                </div>
                <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                    <Link to='/TelaVendedorVendas' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Vendas</Link>
                </div>
            </div>   
            
            <div className='ContainerConteudoProdutosCadastrados'>
                <div className='ContainerConteudoProdutosCadastradosImgConteudoBotoes'>
                    <div className='ContainerConteudoProdutosCadastradosIMG'>
                        <img src={coxinha} alt=''  className='' width='100%'/>
                    </div>
                    <div className='ContainerConteudoProdutosCadastradosConteudo'>
                        <div className=''>
                            Descrição:{}
                        </div>
                        <div>
                            Restante: 15 Unidades
                        </div>
                        <div>
                            Preço: 5 Reais
                        </div>
                        <div>
                            10 coxinhas de frango assadas{<br/>} 
                            5 xozinhas de frango fritas
                        </div>
                    </div>
                    <div className='ContainerConteudoProdutosCadastradosBotoes'>
                    <div>
                            <Link to=''className='ContainerConteudoProdutosCadastradosBotoesBTN'> <p className='' >Editar</p> </Link>
                        </div>
                        <div>
                            <Link to='' className='ContainerConteudoProdutosCadastradosBotoesBTN'> <p className=''>Excluir</p> </Link>
                        </div>
                        <div>
                            <Link to='' className='ContainerConteudoProdutosCadastradosBotoesBTN'> <p className=''>Adicionar</p> </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8080//Listardadosvendedor`);
    const data = await response.json();
    console.log(data)
    return {props:{data}}
}

export default TelaVendedorProdutosCadastrados;

