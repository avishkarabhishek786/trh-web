import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConnectWallet = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [accounts, setAccount] = useState();

    const connectmetamask = async()=>{
        const accounts = await window?.ethereum?.request({ method: 'eth_requestAccounts' });
        console.log("Accounts", accounts)
        accounts && setAccount(accounts[0])
        handleClose();

    }
   
    const getShortenedAddress = (address) => {
        if (!address) return '';
        const firstThree = address.substring(0, 6);
        const lastThree = address.substring(address.length - 4);
        return `${firstThree}...${lastThree}`;
    };

    return (
        <>
            {
                accounts ? <button className="wallet-btn">{getShortenedAddress(accounts)}</button> : <button className="wallet-btn" onClick={handleShow}>Connect Wallet</button>
            }


            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Connect Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <ul className='list-none'>
                            <li>
                                <img src="./metamask.png" className='cursor-pointer' onClick={connectmetamask}/>
                            </li>
                            <li className='mt-1'>
                                <img src="./trezor.png" className='cursor-pointer' />
                            </li>
                        </ul>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default ConnectWallet;