const User = ({name, work, points, pro, img, color, width}) => {
    return(
        <div>
            <section className="box">
             <section className="arr">
                <section className="boximage">
                    <img src={img} alt="" />
                </section>
                <section className="boxt">
                    <h1>{name}</h1>
                    <p>{work}</p>
                </section>
                </section>
                <section className="boxg">
                    <section className="bar">
                        <section className="comp" style={{backgroundColor:`${color}`, width:`${width}`}}>

                        </section>
                    </section>
                    <section className="boxl">
                        <p>{pro}</p>
                        <p className="points">{points} Points</p>
                    </section>
                </section>
            </section>
        </div>

    
    )
}

export {User}