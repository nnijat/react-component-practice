function TransactionsPanel(props) {

    let orders = props.orders.map((order, index) =>
        <TransactionRow
            key={index}
            order={order}

        />
    )



    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Transactions Panel</h3>
            </div>
            <div className="panel-body">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Order Date</th>
                                <th>Order Time</th>
                                <th>Amount (USD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*   <TransactionRow>   */}
                            {orders}
                        </tbody>
                    </table>
                </div>
                <div className="text-right">
                    <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>
    )
}