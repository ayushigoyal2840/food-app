import React, {createContext} from 'react';


import a from '../assets/a.jpg'
import s from '../assets/s.jpg'
import d from '../assets/d.jpg'
import f from '../assets/f.jpg'
import g from '../assets/g.jpg'
import h from '../assets/h.jpg'
import j from '../assets/j.jpg'
import k from '../assets/k.jpg'
import l from '../assets/l.jpg'
import z from '../assets/z.jpg'
import x from '../assets/x.jpg'
import c from '../assets/c.jpg'
import v from '../assets/v.jpg'
import b from '../assets/b.jpg'


const ProductContext = () => {
    return (
        <div className="images">
             
             < img src={a} style={{ height: `150px` }}/>
             < img src={s} style={{ height: `150px` }}/>
             < img src={d} style={{ height: `150px` }}/>
             < img src={f} style={{ height: `150px` }}/>
             < img src={g} style={{ height: `150px` }}/>
             < img src={h} style={{ height: `150px` }}/>
             < img src={j} style={{ height: `150px` }}/>
             < img src={k} style={{ height: `150px` }}/>
             < img src={l} style={{ height: `150px` }}/>
             < img src={z} style={{ height: `150px` }}/>
             < img src={x} style={{ height: `150px` }}/>
             < img src={c} style={{ height: `150px` }}/>
           
           
           
        </div>
    )
};

export default ProductContext;

