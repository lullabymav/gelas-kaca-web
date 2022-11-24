import './../index.css'

function NavRegist() {
    return(
        <div>
            <section className='btn flex gap-3 m-1'>
                <button className='btn-up w-28 rounded-3xl text-xs font-bold'>Sign Up</button>
                <button className='btn-in w-28 rounded-3xl text-xs font-bold'>Sign In</button>
            </section>
        </div>
    )
}

export default NavRegist;