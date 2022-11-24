import terminal from '../assets/terminal.png';

const Developers = () => {

    return (
        <div className="w-full bg-black text-white">
            <div className="max-w-auto px-4 py-16 flex flex-col justify-center items-center">
                <div className='max-w-md text-center'>
                    <h1 className='text-center'>Superpower for DEFI developers</h1>
                    <p className='max-w-md text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur a sunt nobis obcaecati incidunt quisquam similique magni delectus doloribus autem! 
                        Modi facere quidem rerum expedita laudantium soluta consequuntur, at iure.
                    </p>
                </div>
                <div className='py-16'>
                    <img className="max-w-md shadow-lg shadow-cyan-500/50" src={terminal} alt="" />
                </div>
            </div>
        </div>
    )
};

export default Developers;