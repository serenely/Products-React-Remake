import { Avatar, Table, Typography, Image } from "antd"
import { useEffect, useState } from "react"
import style from "./Products.module.css"
import { ShoppingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://dummyjson.com/products')
            const {products} = await response.json()

            setProducts(products)
        }

        getProducts()
    },[])
    return (
        <>
            <Title className={style.titleHeader}  level={2} flex={2}> <ShoppingOutlined /> Products </Title>
            <Table top={10} dataSource={products} pagination={false} key={products.map(product => product.id)} columns={[
                {
                    title: '№',
                    dataIndex: 'id'
                },
                {
                    title: 'Name',
                    dataIndex: 'title'
                },
                {
                    title: 'Brand',
                    dataIndex: 'brand'
                },
                {
                    title: 'Photo',
                    dataIndex: 'images',
                    render: (images,index)=> <img width={100} alt='imag' src={images[0]} />
                },
                {
                    title: 'Category',
                    dataIndex: 'category'
                },
                {
                    title: 'Price',
                    dataIndex: 'price'
                }
            ]} >
            </Table>
        </>
    )
}

export default Products