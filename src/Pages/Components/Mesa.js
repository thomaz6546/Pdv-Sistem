import {FiChevronLeft, FiX} from "react-icons/fi";
import {Button, Overlay} from "react-bootstrap";
import {IoFastFoodOutline} from "react-icons/io5";
import Modal from "react-bootstrap/Modal";
import Popover from "react-bootstrap/Popover";
import React, {useState} from "react"

const MesaComponent = (props) => {
    let productsList = [
        {
            id: 0,
            name: "Guarana",
            price: 4.50,
            img: "",
            description: "garana antartica"
        }, {
            id: 1,
            name: "Batata frita",
            price: 15.50,
            img: "",
            description: "garana antartica"
        }, {
            id: 2,
            name: "Lanche",
            price: 7.50,
            img: "",
            description: "garana antartica"
        }
    ]

    const [produtosAdicionados, setProdutosAdicionados] = useState([]);
    const [list, setList] = useState(productsList)
    const [somarPrecoProdutos, setSomarPrecoProdutos] = useState(0)
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const mostrarModal = () => {
        setShowModal(true);
        setShow(false)
    };
    const handleClose = () => {
        setShow(false);
    }
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const fecharModal = () => {
        setShowModal(false);
        props.delete(props.index)
    }

    function contagemQuahntidadeProdutos(index, type, precoDoProduto) {
        if (type === "plus") {
            if (list[index].contagem) {
                list[index].contagem = list[index].contagem + 1
                console.log("adicionou")
            } else {
                list[index].contagem = 1
            }
            setList([...list])
            console.log(list)
            setProdutosAdicionados(list)
            setSomarPrecoProdutos(somarPrecoProdutos + precoDoProduto)
        } else {
            if (list[index].contagem > 0) {
                list[index].contagem = list[index].contagem - 1
                setList([...list])
                setSomarPrecoProdutos(somarPrecoProdutos - precoDoProduto)
                setProdutosAdicionados(list)
            }
        }

    }

    return (
        <div>
            <div className="box-pai-anotacao-pedidos">
                <div className="anotacao-pedidos">
                    <div className="box-pai-titulo-anotaçao-pedidos">

                        <div className="div-seta">
                            <div>
                                <FiChevronLeft className="backB" style={{height: "50px", width: "50px"}}/>
                            </div>
                        </div>
                        <div className="div-seta">
                            <span  className="titulo-anotaçao-pedidos" >
                            Mesa
                            </span>
                        </div>
                        <div className="div-seta">
                            <div>
                                <FiX className="closeB" onClick={handleClick}
                                     style={{height: "50px", width: "50px"}}/>
                            </div>
                        </div>

                        <Overlay show={show} target={target} placement="left">
                            <Popover id="popover-basic">
                                <Popover.Header>
                                    Você deseja fechar esta comanda?
                                </Popover.Header>
                                <Popover.Body>
                                    <div className="botoesPpver">
                                        <Button className="buttonModalComandaSIM" onClick={mostrarModal}>
                                            Sim
                                        </Button>
                                        <Button className="buttonModalComandaNAO" onClick={handleClose}>
                                            Não
                                        </Button>
                                    </div>
                                </Popover.Body>
                            </Popover>
                        </Overlay>

                        <Modal show={showModal} onHide={fecharModal}>
                            <Modal.Header className="fundo-b-modal" closeButton>
                                <Modal.Title>Mesa 01</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    produtosAdicionados.map((item, index) =>

                                        <div key={index}>
                                            <div>
                                                <div className={"totalComandaPai"}>
                                                    {item?.contagem > 0 &&
                                                    <>
                                                        <div className={"qtdEprcPai"}>
                                                            <div className={"qtdEprc"}>
                                                                {item.contagem}X
                                                            </div>

                                                            <div className={"qtdEprc"}>
                                                                {item.name}
                                                            </div>
                                                        </div>

                                                        <div className={"totalComandaPai"}>

                                                            <div>
                                                                R${item.contagem * item.price}
                                                            </div>
                                                        </div>
                                                    </>}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                <div className={"totalComandaPai"}>
                                    <div>
                                        Total:
                                    </div>
                                    <div>
                                        R${somarPrecoProdutos}
                                    </div>
                                </div>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="b-no-modal" variant="danger" onClick={() => fecharModal()}>
                                    Fechar conta
                                </Button>
                                <Button className="b-yes-modal" onClick={fecharModal}>
                                    Cancelar
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="box-produtos">
                            {
                                list.map((item, index) =>
                                    <div className="products w-100" key={index}>

                                        <div className="d-flex justify-content-between w-100"
                                             style={{boxShadow: "#E2E2E2 0px 1px 2px 0px", borderRadius: "20px"}}>
                                            <div className="d-inline-flex p-2">

                                                <div className="guarana">
                                                    <IoFastFoodOutline style={{height: "50px", width: "50px"}}/>
                                                </div>

                                                <div>
                                                    <h4>
                                                        R$ {item.price}
                                                    </h4>
                                                    <h6>
                                                        {item.name}
                                                    </h6>
                                                </div>

                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div style={{padding: "5px"}}>
                                                    <Button style={{
                                                        color: "black",
                                                        background: "#c7deff",
                                                        border: "1px solid white",
                                                        height: "35px",
                                                        width: "35px",
                                                        borderRadius: "12px"
                                                    }}
                                                            onClick={() => contagemQuahntidadeProdutos(index, "plus", item.price)}>
                                                        +
                                                    </Button>
                                                </div>

                                                <div className="contagem-produtos0">
                                                    <span>
                                                        {item.contagem || 0}
                                                    </span>
                                                </div>

                                                <div style={{padding: "5px"}}>
                                                    <Button style={{
                                                        color: "black",
                                                        background: "#c7deff",
                                                        border: "1px solid white",
                                                        height: "35px",
                                                        width: "35px",
                                                        borderRadius: "12px"
                                                    }}
                                                            onClick={() => contagemQuahntidadeProdutos(index, "minus", item.price)}>
                                                        -
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            <div className="content-total">
                                <div className="pai-total justify-content-between">
                                    <div className={"text-total"}>
                                        <h3>
                                            Total:
                                        </h3>
                                    </div>
                                    <div className={"text-total"}>
                                        <h3>
                                            {somarPrecoProdutos.toFixed(2)}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MesaComponent