import React from 'react'
import {Link} from 'react-router-dom'

import './LoginVendedor.css'

//img
import cardLoginVenderMiniLanchonete from '../../img/lacnhe.JPG'
import cardLoginVenderLanchonete from '../../img/dawdawd.JPG'

export default function LoginVendedor() {

    return(
        <div className='containerLoginVendedor'>
            <div className='containerLoginVendedor2cards'>
                <div>
                    <Link to='/CadastroMiniLanchonete'> <img src={cardLoginVenderMiniLanchonete} alt=''  className='cardLoginVenderMiniLanchonete'/></Link>
                </div>
                <div>
                    <img src={cardLoginVenderLanchonete} alt=''  className='cardLoginVenderLanchonete'/>
                </div>
            </div>
        </div>
    )
}