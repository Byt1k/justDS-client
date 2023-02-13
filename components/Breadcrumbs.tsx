import React, {FC, ReactNode} from 'react'
import styles from '@/styles/breadcrumbs.module.scss'

const Breadcrumbs: FC<{children: ReactNode}> = ({children}) => {
    return (
        <nav className={styles.breadcrumbs}>
            {children}
        </nav>
    )
}

export default Breadcrumbs