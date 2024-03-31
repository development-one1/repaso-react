import React from 'react'
import { PrimerComponente } from './PrimerComponente'

export const SegundoComponente = () => {
  return (
    <div>
        <h2>Segundo componente</h2>
        <ul>
            <li> Elemento 1</li>
            <li> Elemento 2</li>
            <li> Elemento 3</li>
        </ul>
        <PrimerComponente />
    </div>
  )
}
