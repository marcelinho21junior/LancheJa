import React from 'react'
import {Link} from 'react-router-dom'

//css
import './Inicio.css'

//imagens
import imgCardsDesconto from '../../img/imgCardsDescontos.JPG'
import imgCardsPromocao from '../../img/imgCardsPromocao.JPG'
import imgCardsVendedores from '../../img/imgCardsVendedores.JPG'
import olaHumanosInicio from '../../img/olaHumanosInicio.JPG'
import imgclientecelular from '../../img/imgclientecelular.JPG'
import imgcliente3 from '../../img/imgcliente3.JPG'
import imgcliente2 from '../../img/imgcliente2.JPG'
import coxinhacomcoraçao from '../../img/coxinhacomcoraçao.JPG'
import footerLancheja from '../../img/footerlancheja.JPG'


export default function Inicio() {
  return (
    <div className="containerInicio">
      
      {/*titulo*/}
      <div className='tituloInicio'>
        <span className='TxttituloInicio'>LancheJá</span>
      </div> 
    

      {/*Inicio abaixo titulo*/}
      <div className='InicioAbaixoTitulo'> 
        <div className='InicioAbaixoTitulo3Botoes'>
          <Link to='/Quemsomos' className='btnInicioAbaixoTitulo'>Quem Somos</Link>
          <Link to='/CadastroInicial' className='btnInicioAbaixoTitulo'>Cadastrar</Link>
          <Link to='/Login' className='btnInicioAbaixoTituloENTRAR'>Entrar</Link>
        </div>
        <div className='humanoIMGPesquisa'>

          <div className='humanoIMGPesquisatxt'>
            <img src={olaHumanosInicio} alt='' className='olaHumanosInicio' width='100%' height='100%'/>
          </div>

          <div className='humanoIMGPesquisaPesquisa'>
            <div>
            Encontre vendedores por perto de você
            </div>
            <div>
              <input type='text' placeholder='Digite aqui seu endereço' className='humanoIMGPesquisaPesquisaInput'/>
            </div>
            <div>
              <Link to='' className='humanoIMGPesquisaPesquisaBOTAO'>
                Buscar
              </Link>
            </div>
          </div>  
        </div>
      </div>{/*FIM Inicio abaixo titulo*/}

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

      {/*COMO A GNT FUNCIONA PARA CLIENTE*/}
      <div className='TITULOComoFuncionaPClientesXVendedores'>
        <span className='ComoFuncionaPClientesXVendedoresTXT'>Como funcionamos para clientes!</span>
      </div>
      
      <div className='ComoFuncionaPClientesXVendedoresItens'>
        <div className='ComoFuncionaPClientesXVendedoresImgTxt'>
          <div className='ComoFuncionaPClientesXVendedoresItensImagens'>
            <img src={imgclientecelular} alt=''  className='ComoFuncionaPClientesXVendedoresItensImagens'/>
          </div>
          <div>
            1°Cadastre seu login
          </div>
        </div>

        <div className='ComoFuncionaPClientesXVendedoresImgTxt'>
          <div className='ComoFuncionaPClientesXVendedoresItensImagens'>
            <img src={imgcliente2} alt=''  className='ComoFuncionaPClientesXVendedoresItensImagens'/>
          </div>
          <div>
            Encontrar, pedir e pagar
          </div>
        </div>

        <div className='ComoFuncionaPClientesXVendedoresImgTxt'>
          <div className='ComoFuncionaPClientesXVendedoresItensImagens'>
            <img src={imgcliente3} alt=''  className='ComoFuncionaPClientesXVendedoresItensImagens'/>
          </div>
          <div>
            3°Dar aquele feedback <br/>para ajudar o amigo!
          </div>
        </div>
      </div>

      {/*COMO A GNT FUNCIONA PARA VENDEDORES*/}
      <div className='TITULOComoFuncionaPClientesXVendedores'>
        <span className='ComoFuncionaPClientesXVendedoresTXT'>Como funcionamos para vendedores!</span>
      </div>
      
      <div className='ComoFuncionaPClientesXVendedoresItens'>
        <div className='ComoFuncionaPClientesXVendedoresImgTxt'>
          <div className='ComoFuncionaPClientesXVendedoresItensImagens'>
            <img src={imgclientecelular} alt=''  className='ComoFuncionaPClientesXVendedoresItensImagens'/>
          </div>
          <div>
            1°Cadastre seu login
          </div>
        </div>

        <div className='ComoFuncionaPClientesXVendedoresImgTxt'>
          <div className='ComoFuncionaPClientesXVendedoresItensImagens'>
            <img src={imgcliente2} alt=''  className='ComoFuncionaPClientesXVendedoresItensImagens'/>
          </div>
          <div>
            Cadastre seu produto e preço
          </div>
        </div>

        <div className='ComoFuncionaPClientesXVendedoresImgTxt'>
          <div className='ComoFuncionaPClientesXVendedoresItensImagens'>
            <img src={imgcliente3} alt=''  className='ComoFuncionaPClientesXVendedoresItensImagens'/>
          </div>
          <div>
            3°Divulgue sua localização
          </div>
        </div>
      </div>

      {/*COMO A GNT FUNCIONA PARA VENDEDORES*/}
      <div className='ContainerlancheEncontradosAqui'>
        <span className='lancheEncontradosAquiTitulo'>Lanches encontrados aqui!</span>

        <div className='lancheEncontradosAquiCampoCategorias'>
          <span className='lancheEncontradosAquiCategoriasSubTema'>Doces</span>
          <div className='lancheEncontradosAquiTodasCategorias'>
            <div className='lancheEncontradosAquiindividual3em3'>
              <div>
                <span className='lancheEncontradosAqui1categoria'>Brigadeiro</span>
              </div>

              <div className='lancheEncontradosAquiindividual3em3'>
                <span className='lancheEncontradosAqui1categoria'>Trufas</span>
              </div>

              <div className='lancheEncontradosAquiindividual3em3'>
                <span className='lancheEncontradosAqui1categoria'>Bolo</span>
              </div>
            </div>

            <div className='lancheEncontradosAquiindividual3em3'>
              <div>
                <span className='lancheEncontradosAqui1categoria'>Cookies</span>
              </div>

              <div className='lancheEncontradosAquiindividual3em3'>
                <span className='lancheEncontradosAqui1categoria'>Bolo de Pote</span>
              </div>

              <div className='lancheEncontradosAquiindividual3em3'>
                <span className='lancheEncontradosAqui1categoria'>Pão de mel</span>
              </div>
            </div>
          </div>

          <span className='lancheEncontradosAquiCategoriasSubTema'>Salgados</span>
          <div className='lancheEncontradosAquiTodasCategorias'>
            <div className='lancheEncontradosAquiindividual3em3'>
              <div>
                <span className='lancheEncontradosAqui1categoria'>Pastel</span>
              </div>

              <div className='lancheEncontradosAquiindividual3em3'>
                <span className='lancheEncontradosAqui1categoria'>Coxinha</span>
              </div>

              <div className='lancheEncontradosAquiindividual3em3'>
                <span className='lancheEncontradosAqui1categoria'>Lanche</span>
              </div>
            </div>

            <div className='lancheEncontradosAquiindividual3em3'>
              <div>
                <span className='lancheEncontradosAqui1categoria'>Hamburguer</span>
              </div>

              <div className='lancheEncontradosAquiindividual3em3'>
                <span className='lancheEncontradosAqui1categoria'>Pizza</span>
              </div>

              <div className='lancheEncontradosAquiindividual3em3'>
                <span className='lancheEncontradosAqui1categoria'>Esfiha</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/*VEM SER AMIGO DA GENTE*/}
      <div className='ContainerVemSerAmigoDaGnt'> 
        <div className='ContainerVemSerAmigoDaGntTITULO'>
          <span>VEM SER AMIGO DA GENTE</span>
          <img src={coxinhacomcoraçao} alt=''  className=''/>
        </div>

        <div className='ContainerVemSerAmigoDaGnt3Cards'>
          <div className='ContainerVemSerAmigoDaGntCardeTxt'>
            <img src={coxinhacomcoraçao} alt='' className='ContainerVemSerAmigoDaGntCardImagem'/>
            <span className='ContainerVemSerAmigoDaGntTXT'>Nos leve para sua facul</span>
          </div>

          <div className='ContainerVemSerAmigoDaGntCardeTxt'>
            <img src={coxinhacomcoraçao} alt=''  className='ContainerVemSerAmigoDaGntCardImagem'/>
            <span className='ContainerVemSerAmigoDaGntTXT'>Vamos nos conhecer!</span>
          </div>

          <div className='ContainerVemSerAmigoDaGntCardeTxt'>
            <img src={coxinhacomcoraçao} alt=''  className='ContainerVemSerAmigoDaGntCardImagem'/>
            <span>Abra sua Lanchonete!</span>
          </div>
        </div>
      </div>

      <div className='FooterLancheJa'>
        <img src={footerLancheja} className='FooterImgLancheJa'/>
      </div>
    </div>
  );
  
}




