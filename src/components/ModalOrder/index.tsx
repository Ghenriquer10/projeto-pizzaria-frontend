import Modal from 'react-modal'
import style from './modal.module.scss'
import { FiX } from 'react-icons/fi'
import { OrderItemProps } from '../../pages/dashboard/index'

interface ModalOrderProps {
    isOpen: boolean;
    onRequestClose: () => void;
    order: OrderItemProps[];
}

export function ModalOrder({ isOpen, onRequestClose, order }: ModalOrderProps) {

    const customStyle = {
        content: {
            top: '50%',
            bottom: 'auto',
            left: '50%',
            right: 'auto',
            padding: '30px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#1D1D2E',

        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyle}
        >
            <button
                type='button'
                onClick={onRequestClose}
                className="react-modal-close"
                style={{ background: 'transparent', border: 0 }}
            >
                <FiX size={45} color="#f34738" />

                <div className={style.container}>
                    <h2>Detalhes do pedido</h2>
                    <span>
                        Mesa: <strong>{order[0].order.table}</strong>
                    </span>

                    {order.map((item) => {
                        return (
                            <section key={item.id} className={style.containerItem}>
                                <span>{item.amount} - <strong>{item.product.name}</strong></span>
                                <span className={style.description}>{item.product.description}</span>
                            </section>
                        )
                    })}
                </div>
            </button>

        </Modal>
    )
}