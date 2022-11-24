const Subscribe = () => {
    return (
        <div className="w-full bg-black text-white">
            <div className="max-w-auto px-4 py-16 flex flex-col justify-center items-center">
                <div className='max-w-md text-center'>
                    <h1 className='text-center'>Join our Community</h1>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                        <input placeholder="Your email" type="text" className="md:mr-4"/>
                        <button className="mt-4 md:mt-0">Subscribe</button>
                    </div>
                    <p className='max-w-md text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur a sunt nobis obcaecati incidunt quisquam similique magni delectus doloribus autem! 
                        Modi facere quidem rerum expedita laudantium soluta consequuntur, at iure.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Subscribe;