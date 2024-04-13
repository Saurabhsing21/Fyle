# Tax Calculator

This is a simple tax calculator designed to calculate the income tax based on the gross annual income, extra income, age group, and applicable deductions. It provides an estimated tax amount that needs to be paid based on the user input.

## Features

### Input Fields

- **Gross Annual Income**: Enter your gross annual income in rupees.
- **Extra Income**: Enter any additional income in rupees.
- **Age Group**: Select your age group from the given options.
- **Total Applicable Deductions**: Enter the total amount of deductions in rupees.

### Validation

- All income fields and the deductions field are required.
- Only numerical values are allowed in the input fields. An error icon will be displayed if non-numeric characters are entered.

### Calculation

- The tax is calculated based on the taxable income, which is determined by the gross annual income, extra income, and deductions.
- Tax rates vary based on the taxable income and age group:
  - Age < 40: 30% for income > ₹8 Lakhs
  - Age ≥ 40 & < 60: 40% for income > ₹8 Lakhs
  - Age ≥ 60: 10% for income > ₹8 Lakhs

### Display

- Upon submission of valid inputs, a modal displays the calculated tax amount.
- The modal also shows the total income after tax deduction.

## Usage

1. **Input Fields**: Enter the required details in the input fields.
2. **Validation**: Ensure all required fields are filled with valid numerical values.
3. **Submit**: Click on the "Calculate" button to compute the tax.
4. **Result**: The calculated tax amount and total income after tax will be displayed in a modal.

## Technologies Used

- HTML
- CSS
- JavaScript

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
