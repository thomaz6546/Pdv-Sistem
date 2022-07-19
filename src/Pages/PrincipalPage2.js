import AddLogo from "../Images/add (1).png"
import "../Styles/PrincipalPage.css"
import HeaderComponent from "./Components/Header";
import MesaComponent from "./Components/Mesa";
import {useState} from "react";


function PrincipalPage2() {
    const [tableList, setTableList] = useState([])

    const addMesa = () => {
        for (let i = 0; i <= tableList.length; i++) {
            setTableList([...tableList, `mesa ${i}`])
        }
    }

    const deleteMesa = (index) => {
        let arr = Object.assign([],tableList)
        arr.splice(index, 1)

        setTableList(arr)
        console.log(index)
        console.log(arr)
    }


    // FUNÇOES NAO USADAS


    // const [texto, setTexto] = useState("cebola")
    // function contarProduto(idDoProduto) {
    // console.log(idDoProduto)
    //fazer um for no array e contar quantas vezes o ID recebido existe.
    //     for (`let i = 0; i < produtosAdicionados.length; i++`) {
    //         if (produtosAdicionados[i].id === idDoProduto.id) {
    //             console.log("existe")
    //         } else {
    //             console.log("nao existe")
    //         }
    //     }
    // }
    // function handleProductClick(type, item) {
    //
    //     if (type === "plus") {
    //         if (selectProducts[item.id]) {
    //             setSelectedProducts({
    //                 ...selectProducts, [item.id]: {
    //                     name: item.name,
    //                     price: item.price,
    //                     count: selectProducts[item.id].count + 1
    //                 }
    //             })
    //         } else {
    //             setSelectedProducts({
    //                 ...selectProducts, [item.id]: {
    //                     name: item.name,
    //                     price: item.price,
    //                     count: 1
    //                 }
    //             })
    //         }
    //
    //     } else {
    //         if (selectProducts[item.id]?.count > 0) {
    //             if (type === "minus") {
    //                 if (selectProducts[item.id]) {
    //                     setSelectedProducts({
    //                         ...selectProducts, [item.id]: {
    //                             name: item.name,
    //                             price: item.price,
    //                             count: selectProducts[item.id].count - 1
    //                         }
    //                     })
    //                 } else {
    //                     setSelectedProducts({
    //                         ...selectProducts, [item.id]: {
    //                             count: 1
    //                         }
    //                     })
    //                 }
    //             }
    //         }
    //     }
    // }

    return (
        <div>
            <HeaderComponent/>
            <div className="box-botao-adicionar">
                <button type="button" className="botao-adicionar" onClick={addMesa}>
                    <img src={AddLogo} alt=""/>
                </button>
            </div>
            <div className="gridBoxMesaComponent">
                {
                    tableList.map((t, index) =>
                        <div key={index} className="mesaComponent">
                            <MesaComponent delete={(index) => deleteMesa(index)} index={index}/>
                        </div>
                    )}
            </div>
        </div>
    )

}

export default PrincipalPage2