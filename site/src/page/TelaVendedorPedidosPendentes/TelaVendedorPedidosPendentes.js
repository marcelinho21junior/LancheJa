import React from 'react'
import {Link} from 'react-router-dom'

import '../TelaVendedorDados/TelaVendedorDados.css'

export default function TelaVendedorPedidosPendentes() {
    return(
        <div className='TelaVendedorPedidosPendentes'>
            {/*HEADER COMEÇO DA PAGINA --- CSS VEM DO CSS DO TELAVENDEDORDADOS*/}    
            <div className='HeaderTelasVendedor'>
                <span className='HeaderTelasVendedorLancheJa'>LancheJá</span>
                <span className='HeaderTelasVendedorSair'>->Sair</span>
            </div> 

            {/*botoes COMEÇO DA PAGINA --- CSS VEM DO CSS DO TELAVENDEDORDADOS*/}  
            <div className='ContainerTelaVendedorDadosBotoesMenu'>
                <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                    <Link to='/TelaVendedorDados' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Dados</Link>
                </div>
                <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                    <Link to='/TelaVendedorProdutosCadastrados' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Produtos Cadastrados</Link>
                </div>
                <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                    <Link to='/TelaVendedorPedidosPendentes' className='ContainerTelaVendedorDadosBotoesMenuBTNbotaoSelecionado'>Pedidos Pendentes</Link>
                </div>
                <div className='ContainerTelaVendedorDadosBotoesMenuBTN'>
                    <Link to='/TelaVendedorVendas' className='ContainerTelaVendedorDadosBotoesMenuBTNbotao'>Vendas</Link>
                </div>
            </div>   
        </div>
    )
}