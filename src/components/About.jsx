import React from 'react';
import { SiHiveBlockchain } from 'react-icons/si'

const About = () => {
    return (
        <div class="bg-black">
            <div className='max-w-[1240px] mx-auto px-4 py-16 text-white text-center'>
                <h1 className='py-4'>A growing protocol ecosystem</h1>
                <p class="text-center py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur unde expedita rem qui animi accusantium ipsa ex doloremque consequatur reprehenderit odio quod vitae est vero, iure aliquid! Tenetur, illum!</p>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                    
                    <div className='flex flex-col border rounded-lg text-left p-4'>
                        <div>
                            <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                                <SiHiveBlockchain size={40}/>
                            </div>
                            <h3 className='text-2xl font-bold'>Reliable, tamper-proof network</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque, recusandae, ad eum quisquam dignissimos suscipit, quod ducimus porro cupiditate voluptates ipsa architecto beatae voluptatem ut molestiae non sapiente alias? </p>
                        </div>
                    </div>

                    <div className='flex flex-col border rounded-lg text-left p-4'>
                        <div>
                            <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                                <SiHiveBlockchain size={40}/>
                            </div>
                            <h3 className='text-2xl font-bold'>Reliable, tamper-proof network</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque, recusandae, ad eum quisquam dignissimos suscipit, quod ducimus porro cupiditate voluptates ipsa architecto beatae voluptatem ut molestiae non sapiente alias? </p>
                        </div>
                    </div>

                    <div className='flex flex-col border rounded-lg text-left p-4'>
                        <div>
                            <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                                <SiHiveBlockchain size={40}/>
                            </div>
                            <h3 className='text-2xl font-bold'>Reliable, tamper-proof network</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque, recusandae, ad eum quisquam dignissimos suscipit, quod ducimus porro cupiditate voluptates ipsa architecto beatae voluptatem ut molestiae non sapiente alias? </p>
                        </div>
                    </div>

                    <div className='flex flex-col border rounded-lg text-left p-4'>
                        <div>
                            <div className='bg-[#00d8ff] inline-flex p-3 rounded-full'>
                                <SiHiveBlockchain size={40}/>
                            </div>
                            <h3 className='text-2xl font-bold'>Reliable, tamper-proof network</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque, recusandae, ad eum quisquam dignissimos suscipit, quod ducimus porro cupiditate voluptates ipsa architecto beatae voluptatem ut molestiae non sapiente alias? </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;