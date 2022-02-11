import React from 'react'
import {Link} from 'react-router-dom'

//css
import './Quemsomos.css'

//imagens
import Quemsomosimg1 from '../../img/Quemsomosimg1.JPG'
import quemsomosimg2 from '../../img/quemsomosimg2.JPG'
import quemsomosimg3 from '../../img/quemsomosimg3.JPG'
import quemsomosimg4 from '../../img/quemsomosimg4.JPG'
import quemsomosimg5 from '../../img/quemsomosimg5.JPG'
import footerLancheja from '../../img/footerlancheja.JPG'

export default function Quemsomos() {
  return (
    <div className='ContainerQuemSomos'>
      
      {/*titulo*/}
      <div className='tituloQuemSomosCorLaranja'>
        <div className='tituloQuemSomos'>
          <div>
            <Link to='/'>
              <span className='TxttituloQuemSomosLancheJá'>LancheJá</span>
            </Link>
          </div>
          <div>
            <span className='TxttituloQuemSomos'>QuemSomos</span>
          </div>
        </div>
      </div>

      {/*imagem1*/}
      <div className='QuemSomosImagens'>
        <img src={Quemsomosimg1} alt=''  className='QuemSomosImagensIndividuais' width='50%'/>
      </div>

      {/*imagem2*/}
      <div className='QuemSomosImagens'>
        <img src={quemsomosimg2} alt=''  className='QuemSomosImagensIndividuais' width='50%'/>
      </div>

      {/*imagem3*/}
      <div className='QuemSomosImagens'>
        <img src={quemsomosimg3} alt=''  className='QuemSomosImagensIndividuais' width='50%'/>
      </div>

      {/*imagem4*/}
      <div className='QuemSomosImagens'>
        <img src={quemsomosimg4} alt=''  className='QuemSomosImagensIndividuais' width='50%'/>
      </div>

      {/*imagem5*/}
      <div className='QuemSomosImagens'>
        <img src={quemsomosimg5} alt=''  className='QuemSomosImagensIndividuais' width='50%'/>
      </div>
      <div className='FooterLancheJa'>
        <img src={footerLancheja} className='FooterImgLancheJa'/>
      </div>
    </div>
  );
}


