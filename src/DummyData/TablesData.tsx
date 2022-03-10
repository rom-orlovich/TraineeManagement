import { Link } from "react-router-dom";
import { Colors } from "../helpers/AppVariables";
import {
  createColField,
  createExpense,
  createIncome,
  createLead,
  createTrainee,
} from "./DummyDataFunction";
import {
  DataGrid,
  Expense,
  Income,
  Lead,
  Task,
  Trainee,
} from "./DummyDataType";

export const DailyTask: DataGrid<Task> = {
  columns: [
    { field: "id", hide: true },
    { field: "hour", headerName: "Hour", flex: 1 },
    { field: "topic", headerName: "Topic", flex: 2 },
    {
      field: "status",
      headerName: "status",
      type: "boolean",
      flex: 1,
    },
  ],
  rows: [
    { id: 1, hour: "12:00", topic: "training", status: false },
    { id: 2, hour: "15:00", topic: "eating", status: false },
    { id: 3, hour: "17:00", topic: "sleeping", status: false },
  ],
};

export const TraineeTable: DataGrid<Trainee> = {
  columns: [
    { field: "id", hide: true },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "tel",
      headerName: "Tel",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "profile",
      headerName: "Profile",
      flex: 1,

      headerAlign: "center",
      align: "center",
      renderCell: (parms) => {
        return (
          <Link
            style={{
              padding: "0.2rem",
              backgroundColor: `${Colors.blue[400]}`,
              borderRadius: "8px",
              textDecoration: "none",
              color: `${"white"}`,
            }}
            to={`userProfile/${parms.id}`}
          >
            Profile
          </Link>
        );
      },
    },
  ],
  rows: [
    createTrainee("reb", "Male", "054222222", "madasdasd@gmail.com", true),
    createTrainee("r", "Female", "05423222", "msd@gmail.com", true),
    createTrainee("msd", "Female", "2345123", "madaasdasd@gmail.com", true),
  ],
};

export const LeadsTable: DataGrid<Lead> = {
  columns: [
    { field: "id", hide: true },
    createColField("date", "Date", 1),
    createColField("name", "Name", 1),
    createColField("tel", "Tel", 1),
    { ...createColField("notes", "Notes", 2), editable: true },
    createColField("source", "Source", 1),
    { ...createColField("status", "Done", 0.5), type: "boolean" },
  ],
  rows: [
    createLead(
      "12/02/2020",
      "rm",
      "0543131",
      "asdasd  asdasd",
      "instagram",
      false
    ),
    createLead(
      "12/12/2021",
      "rom",
      "054322131",
      "asdasd asdasd asdasd",
      "facebook",
      false
    ),
  ],
};
export const IncomesTable: DataGrid<Income> = {
  columns: [
    { field: "id", hide: true },
    { ...createColField<Income>("date", "Date", 1), type: "date" },
    createColField<Income>("nameClient", "Name", 1),
    createColField<Income>("nameProduct", "Product", 1),
    { ...createColField<Income>("type", "Type", 0.5), type: "singleSelect" },
    {
      ...createColField<Income>("describe", "Describe", 1.5),
      editable: true,
    },
    createColField<Income>("paymentMethod", "Method", 1.5),
    {
      ...createColField<Income>("price", "Price", 0.5),
      type: "number",
      valueFormatter: (value) => `${value.value}$`,
    },
  ],

  rows: [
    createIncome("s", "Other", "Monthly", "sadasd adasd", "Bank Transfer", 12),
    createIncome("g", "Nutrition plan", "Monthly", "sdd adasd", "Other", 15),
    createIncome("g", "Personal Training", "Monthly", "sdd adasd", "Other", 15),
  ],
};

export const ExpensesTable: DataGrid<Expense> = {
  columns: [
    { field: "id", hide: true },
    { ...createColField<Expense>("date", "Date", 1), type: "date" },
    createColField<Expense>("nameExpense", "Expense", 1),
    createColField<Expense>("paymentTo", "Payment To", 1.5),
    { ...createColField<Expense>("type", "Type", 0.5), type: "singleSelect" },
    {
      ...createColField<Expense>("describe", "Describe", 1.5),
      editable: true,
    },
    createColField<Expense>("paymentMethod", "Method", 1.5),
    {
      ...createColField<Expense>("price", "Price", 0.5),
      type: "number",
      valueFormatter: (value) => `${value.value}$`,
    },
    { ...createColField<Expense>("quantity", "Quantity", 1.5), type: "number" },
  ],

  rows: [
    createExpense(
      "Equipment",
      "sport",
      "One-Time",
      "asd asd",
      "Credit Card",
      23,
      2
    ),
    createExpense(
      "Learning",
      "sport",
      "One-Time",
      "asd asd",
      "Credit Card",
      42,
      1
    ),
    createExpense(
      "Insurance",
      "mega",
      "One-Time",
      "asd asd",
      "Credit Card",
      12,
      4
    ),
  ],
};
