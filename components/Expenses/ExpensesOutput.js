import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-01-07"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.98,
    date: new Date("2023-11-17"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2024-01-02"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.5,
    date: new Date("2023-11-27"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 20.0,
    date: new Date("2022-11-29"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-01-07"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.98,
    date: new Date("2023-11-17"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2024-01-02"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.5,
    date: new Date("2023-11-27"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 20.0,
    date: new Date("2022-11-29"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
