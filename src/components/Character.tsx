import React, { FC } from 'react'
import { Character } from '../service/hero.service'
import { PageProps } from './Page'
import RefItem from './RefItem'
import RefList from './RefList'

export const CharacterPage: FC<PageProps & {character: Character}> = ({ character, selectActive }) => {
    const {name, aliases, allegiances, spouse, books, povBooks, titles} = character

    return <div>
        <div className="row">
            <h1>Character: {name}</h1>
        </div>

        <div className="row">
            <p>{name} the {aliases[0]}, the {titles[0]} of {<RefItem onClick={() => selectActive(allegiances[0])} url={allegiances[0]} />}</p>
            {spouse && <p>{name || aliases[0]} is married to {<RefItem url={spouse} onClick={() => selectActive(spouse)} />}.</p>}
        </div>

        <RefList list={[...books, ...povBooks]} title="Books" onClickItem={selectActive}/>
        <RefList list={[...allegiances]} title="Allegiances" onClickItem={selectActive}/>
    </div>
}

export default CharacterPage
