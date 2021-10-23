import { useObservableState } from 'observable-hooks';
import React, { useEffect, useState, useMemo } from 'react';
import { Pokemon, pokemon$, selected$} from '../store'

export const Search = () => {
    const [search, setSearch] = useState('')
    const pokemon = useObservableState(pokemon$, [])
  
  
    const filteredPokemon = useMemo(() => {
      return pokemon.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }, [pokemon, search])
  
    return (
      <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div>
          {filteredPokemon.map((p) => (
            <div key = {p.name}>
              <input type="checkbox" 
              checked={p.selected}
              onChange={() => {
                if(selected$.value.includes(p.id)) {
                  selected$.next(selected$.value.filter(v => v !== p.id))
                } else {
                  selected$.next([...selected$.value, p.id])
                }
              } }
               />
              <strong>{p.name}</strong> - {p.power}
            </div>
          ))}
        </div>
      </div>
    )
  }