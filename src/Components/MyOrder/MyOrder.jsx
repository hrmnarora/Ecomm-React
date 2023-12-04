import React from 'react'
import "./MyOrder.css"
import Table from '../Comman/Table'
const MyOrder = () => {
  return (
    <section className="align_center myorder-page">
        <Table headings={['Order' , 'Products', 'Total', "Status"]}>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Iphone, Power Bank</td>
                    <td>$1299</td>
                    <td>Shipped</td>
                </tr>
            </tbody>
        </Table>
    </section>
  )
}

export default MyOrder