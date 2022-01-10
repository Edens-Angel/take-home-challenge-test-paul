import React, {FC} from 'react'
import { useItem } from '../service/hero.service'
import { formatName } from '../util/util'

const RefItem: FC<{onClick: () => void; url: string}> = ({url, onClick}) => {
    const item = useItem(url)
    
    return <span role="button" onClick={onClick}>{formatName(item)}</span>
}

export default RefItem