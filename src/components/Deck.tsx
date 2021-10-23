import React, { useEffect, useState, useMemo } from 'react';
import { deck$, Pokemon, pokemon$, selected$} from '../store'
import { useObservableState } from 'observable-hooks';

export const Deck = () => {
    const deck = useObservableState(deck$, [])
    return (
        <div>
            <h4>Deck</h4>
            <div>
                {deck.map((p) => (
                    <div key={p.id} style={{ display: "flex" }}>
                        <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                        alt={p.name}
                        />
                        <div>
                        <div>{p.name}</div>
                        </div>
                  </div>
                ))}
            </div>
        </div>
    )
}