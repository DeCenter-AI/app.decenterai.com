import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Payment", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Payment = await ethers.getContractFactory("Payment");
    const payment = await Payment.deploy();

    return { payment, owner, otherAccount };
  }

  describe("Deposit", function () {
    describe("Validations", function () {
      it("Should revert with the right error ", async function () {
        const { payment } = await loadFixture(deployOneYearLockFixture);
        const depositAmount = ethers.parseUnits("1", "ether");
        const expectedAmount = ethers.parseUnits("2", "ether");

        await expect(
          payment.deposit(expectedAmount, { value: depositAmount })
        ).to.be.revertedWith("Invalid deposit amount");
      });
    });

    describe("Payment", function () {
      it("Should deposit funds", async function () {
        const { payment, owner } = await loadFixture(deployOneYearLockFixture);
        const depositAmount = ethers.parseUnits("1", "ether");
        const expectedAmount = ethers.parseUnits("1", "ether");
        await payment.deposit(expectedAmount, { value: depositAmount });
        const balance = await payment.depositRecord(owner);
        expect(balance).to.equal(depositAmount);
      });
    });

    describe("Events", function () {
      it("Should emit an event on deposit", async function () {
        const { payment, owner } = await loadFixture(deployOneYearLockFixture);

        const depositAmount = ethers.parseUnits("1", "ether");
        const expectedAmount = ethers.parseUnits("1", "ether");

        await expect(payment.deposit(expectedAmount, { value: depositAmount }))
          .to.emit(payment, "Deposit")
          .withArgs(owner.address, depositAmount, true); // We accept any value as `when` arg
      });
    });
  });

  describe("Zero", function () {
    describe("Removal", function () {
      it("Should zero deposit record", async function () {
        const { payment, owner } = await loadFixture(deployOneYearLockFixture);

        await payment.zeroDepositRecord(owner);
        const balance = await payment.depositRecord(owner);
        expect(balance).to.equal(0);
      });
    });

    describe("Events", function () {
      it("Should emit an event on removal", async function () {
        const { payment, owner } = await loadFixture(deployOneYearLockFixture);

        await expect(payment.zeroDepositRecord(owner))
          .to.emit(payment, "Erase")
          .withArgs(owner.address);
      });
    });
  });
});
