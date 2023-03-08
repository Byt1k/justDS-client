import React, {FC, useEffect} from 'react'

type ShareProps = {
    className?: string,
    content: {
        title: string,
        description?: string
        image: string
    }
}

const Share: FC<ShareProps> = ({className, content}) => {
    useEffect(() => {
        //@ts-ignore
        window.Ya.share2('ya', {
            theme: {
                services: 'telegram,vkontakte,whatsapp,viber',
                shape: "round",
            },
            content: {
                ...content,
                url: window.location.href
            }
        });
    })
    return (
        <>
            <div className={`share ${className}`}>
                <p>Поделиться: </p>
                <div id="ya" />
            </div>
            <style jsx>{`
              .share {
                display: flex;
                align-items: center;
                column-gap: 15px;
              }
              .share > p {
                font-size: 18px;
              }
            `}</style>
        </>
    );
}

export default Share;