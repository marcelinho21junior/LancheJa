import React from 'react'
import {BrowserRouter,Switch,Route}from 'react-router-dom'

import Inicio from './page/Inicio/Inicio'
import Quemsomos from './page/QuemSomos/Quemsomos'
import CadastroInicial from './page/CadastroInicial/Cadastroinicial'
import Login from './page/login/Login'
import TelaClienteHome from './page/TelaCliente/TelaClienteHome'
import TelaVendedorHome from './page/TelaVendedor/TelaVendedorHome'

//tela vendedor
import LoginVendedor from './page/LoginVendedor/LoginVendedor'
import CadastroMiniLanchonete from './page/CadastroMiniLanchonete/CadastroMiniLanchonete'
import TelaVendedorDados from './page/TelaVendedorDados/TelaVendedorDados'
import TelaVendedorPedidosPendentes from './page/TelaVendedorPedidosPendentes/TelaVendedorPedidosPendentes'
import TelaVendedorProdutosCadastrados from './page/TelaVendedorProdutosCadastrados/TelaVendedorProdutosCadastrados'
import TelaVendedorVendas from './page/TelaVendedorVendas/TelaVendedorVendas'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/Quemsomos" component={Quemsomos}/>
                <Route path="/CadastroInicial" component={CadastroInicial}/>
                <Route path="/Login" component={Login}/>
                <Route path="/TelaClienteHome" component={TelaClienteHome}/>
                <Route path="/TelaVendedorHome" component={TelaVendedorHome}/>
                <Route path="/LoginVendedor" component={LoginVendedor}/>
                <Route path="/CadastroMiniLanchonete" component={CadastroMiniLanchonete}/>
                <Route path="/TelaVendedorDados" component={TelaVendedorDados}/>
                <Route path="/TelaVendedorPedidosPendentes" component={TelaVendedorPedidosPendentes}/>
                <Route path="/TelaVendedorProdutosCadastrados" component={TelaVendedorProdutosCadastrados}/>
                <Route path="/TelaVendedorVendas" component={TelaVendedorVendas}/>
            </Switch>
        </BrowserRouter>
    )
}