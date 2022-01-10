import React, { FC } from 'react'
import { Book } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const BookPage: FC<PageProps & {book: Book}> = ({ book, selectActive, activeFilter }) => {
    const {name, characters, povCharacters} = book
    return <div>
        <div className="row">
            <h1>Book: {name}</h1>
        </div>
        <RefList list={[...characters, ...povCharacters]} title="Characters" onClickItem={selectActive} />
    </div>
}

export default BookPage
