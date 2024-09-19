// Singleton Pattern Implementation for BankBranch

// 1. Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance = null;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
    // 3. Constructor that initializes branch information.
    // @param {Object} branchInfo - Information about the bank branch.
    constructor(branchInfo) {
        // Check if an instance already exists
        if (!bankBranchInstance) {
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        }
        // Return the existing instance
        return bankBranchInstance;
    }

    // 4. Method to retrieve branch information.
    // @returns {Object} - The branch information.
    getBranchInfo() {
        return this.branchInfo;
    }

    // Additional method to update branch information.
    // @param {Object} newBranchInfo - New information to update the branch.
    updateBranchInfo(newBranchInfo) {
        this.branchInfo = { ...this.branchInfo, ...newBranchInfo };
    }
}

// 5. Usage Section

// Creating the first instance of BankBranch
const branchA = new BankBranch({
    name: "Downtown Branch",
    address: "123 Main St",
    manager: "Zack Schroder"
});

// Creating a second instance of BankBranch
const branchB = new BankBranch({
    name: "Uptown Branch",
    address: "456 Elm St",
    manager: "Charlie Davis"
});

// Retrieving branch information from both instances
console.log("Branch A Info:", branchA.getBranchInfo());
console.log("Branch B Info:", branchB.getBranchInfo());

// Verifying that both instances are the same
console.log("Are branchA and branchB the same instance?", branchA === branchB);

// Updating branch information using branchB
branchB.updateBranchInfo({ manager: "Sasha Heyburgh" });

// Retrieving updated branch information from branchA
console.log("Updated Branch A Info:", branchA.getBranchInfo());
