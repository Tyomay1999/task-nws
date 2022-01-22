import React from 'react'
import loadingStyle from './loading.module.scss'

const Loading = ( ) => {
    return <div className={ loadingStyle.main }>
        <div className={loadingStyle.middle}>
            <div className={`${loadingStyle.bar} ${loadingStyle.bar1}`} />
            <div className={`${loadingStyle.bar} ${loadingStyle.bar2}`} />
            <div className={`${loadingStyle.bar} ${loadingStyle.bar3}`} />
            <div className={`${loadingStyle.bar} ${loadingStyle.bar4}`} />
            <div className={`${loadingStyle.bar} ${loadingStyle.bar5}`} />
            <div className={`${loadingStyle.bar} ${loadingStyle.bar6}`} />
            <div className={`${loadingStyle.bar} ${loadingStyle.bar7}`} />
            <div className={`${loadingStyle.bar} ${loadingStyle.bar8}`} />
        </div>
    </div>
}

export default Loading