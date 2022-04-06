function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}>
        <div>
          <h2>{props.date}</h2>
          <div>{props.amount}</div>
        </div>
      </ExpenseDate>
    </Card>
  );
}
