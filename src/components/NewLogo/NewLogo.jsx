import React from 'react'

import './newlogo.css';

import logoEntly from './assets/ently.png';
import logoTree from './assets/tree.png'
import goBack from './assets/goBack.svg'
import { NavLink } from 'react-router-dom';

export default function NewLogo({goBack=false}) {
    return (
<>
        {goBack && (
        <div className='logo'>
        <div className='logoEntly'>
        <img className='entlyImg' src={goBack} alt="EntlyLogo" />
        </div>
        <div className='logoTree' >
        <span className='treeImg'>
Back
            </span>
        </div>
    </div>
        )}

{!goBack && (
        <div className='logo'>
        <div className='logoEntly'>
        <img className='entlyImg' src={logoEntly} alt="EntlyLogo" />
        </div>
        <div className='logoTree' >
        <NavLink to="/tree">
        <img className='treeImg' src={logoTree} alt="EntlyLogo" /></NavLink></div>
    </div>
        )}


        </>
    )
}
