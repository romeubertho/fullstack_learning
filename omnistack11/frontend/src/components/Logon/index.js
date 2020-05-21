import React from "react";
import './styles.css'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import {Add} from "@material-ui/icons";

export default function Logon() {
    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt='Be The Hero'/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder='Sua ID'/>
                    <button className='button' type='submit'>Entrar</button>

                    <a href='/register'>
                        <Add color='primary'/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt='Heroes'/>
        </div>
    );
}