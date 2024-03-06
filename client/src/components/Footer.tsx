import { SocialIcon } from 'react-social-icons'

function Footer() {

    return (
        <section className='w-full bg-black text-white py-5 px-72'>
            <section className='flex gap-8'>
                <address>
                <span className='font-bold text-xl'>Contatos:</span>
                    <p>mateushilariodas@gmail.com</p>
                    <p>(16)99348-4691</p>
                </address>
                <div>
                    <span className='font-bold text-xl'>Mateus na midia:</span>
                    <p>Local para site</p>
                    <p>Local para site</p>
                </div>
            </section>
            <section className="flex justify-between items-center">
                <div>
                    <p>© 2024 Copyright: mateushilariodias.com</p>
                </div>
                <div className='flex gap-2'>
                    <SocialIcon url="https://tiktok.com/in/couetilc" className='w-8 h-8' />
                    <SocialIcon url="https://instagram.com/in/couetilc" className='w-8 h-8' />
                    <SocialIcon url="https://youtube.com/in/couetilc" className='w-8 h-8' />
                    <SocialIcon url="https://linkedin.com/in/couetilc" className='w-8 h-8' />
                    <SocialIcon url="https://github.com/in/couetilc" className='w-8 h-8' />
                </div>
            </section>
        </section>
    )
}
export default Footer;