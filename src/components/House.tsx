import React, { FC } from 'react'
import { House } from '../service/hero.service'
import { PageProps } from './Page'
import RefItem from './RefItem'
import RefList from './RefList'

export const HousePage: FC<PageProps & {house: House}> = ({ house, selectActive }) => {
    const {name, currentLord, founded, founder, heir, swornMembers, cadetBranches} = house
    return <div>
        <div className="row">
            <h1>House: {name}</h1>
        </div>

        <div className="row">
            <p>The house {name} is ruled by {<RefItem onClick={() => selectActive(currentLord)} url={currentLord} />}, and will later be rules by {<RefItem onClick={() => selectActive(heir)} url={heir} /> }.</p>
            <p>It was founded in {founded} by {<RefItem onClick={() => selectActive(founder)} url={founder} />}.</p>
        </div>

        <RefList list={[...swornMembers]} title="Sworn members" onClickItem={selectActive}/>
        <RefList list={[...cadetBranches]} title="Cadet branches" onClickItem={selectActive}/>
    </div>
}

export default HousePage
