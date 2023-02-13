import React, {FC} from 'react'

const Share: FC<{ className?: string }> = ({className}) => {
    return (
        <>
            <div className={`share ${className}`}>
                <p>Поделиться: </p>
                <div className="share__icons">
                    <img src="/telegram.svg" alt="telegram"/>
                    <img src="/vk.svg" alt="vk"/>
                    <img src="/whatsapp.svg" alt="whatsapp"/>
                    <img src="/viber.svg" alt="viber"/>
                </div>
            </div>
            <style jsx>{`
              .share {
                display: flex;
                align-items: center;
                column-gap: 40px;
              }
              
              .share__icons {
                  display: flex;
                  align-items: center;
                  column-gap: 20px;
                }
            `}</style>
        </>
    );
}

export default Share;