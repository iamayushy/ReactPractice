import man from '../assets/man.png'
import arrow from '../assets/angle-right.svg'
import graph from '../assets/growth.png'
import message from '../assets/messages.png'
import sett from '../assets/settings.png'
import plus from '../assets/plus.png'
import { User } from './User'
import { useContext } from 'react'
import { theme } from '../Context/ThemeContext'
const Dashboard = () => {
    const {dark, setDark} = useContext(theme)
//    console.log(dark)
   const handleDark = () => {
      setDark(!dark)
   }
    return(
        <div className='div'>
            <section className="leftpanel">
                <section className="action">
                    <section className="avt">
                        <img src={man} alt="" />
                    </section>
                    <section className="ease">
                        <img className='active' src={arrow} alt="" />
                        <img src={graph} alt="" />
                        <img src={message} alt="" />
                        <img src={sett} alt="" />
                    </section>
                    <section className="act">
                        <img src={plus} alt="" />
                    </section>
                </section>
            </section>
            <section className="home">
                <section className='hw'>
                <section className='dtext'>
                    <section className='dtext2'>
                        <h1>My Dashboard</h1>
                        <label className='switch'>
                        <input type="checkbox" onChange={handleDark} defaultChecked={dark}/>
                        <span className='slider round'></span>
                        </label>
                    </section>
                </section>
                <section>
                    <section className='dtext3'>
                        <h4>Active Users</h4>
                        <h5>For 21 April 2022</h5>
                    </section>
                </section>
                <section>
                    <User
                    img={man}
                    name={'Nrupul Dev'}
                    work={'Banglore, India'}
                    pro={'Professional Level 15'}
                    color={'green'}
                    width={'78%'}
                    points={4732}/>

                    <User
                    img={man}
                    name={'Masayoshi'}
                    work={'Tokyo, Japan'}
                    pro={'Professional Level 12'}
                    color={'blue'}
                    width={'56%'}
                    points={3732}/>

                    <User
                    img={man}
                    name={'Ronald Rivian'}
                    work={'Seattle, USA'}
                    pro={'Professional Level 11'}
                    color={'violet'}
                    width= {'30%'}
                    points={2732}/>
                </section>
                </section>
            </section>
        </div>
    )
}
export {Dashboard}