function TransactionRow(props) {
    return (
        <tr>
            <td>{props.order.id}</td>
            <td>{props.order.orderDate}</td>
            <td>{props.order.orderTime}</td>
            <td>{props.order.amount}</td>
        </tr>
    )
}