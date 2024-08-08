import { describe, it, expect, beforeEach, afterEach } from "@jest/globals";
import { passwordService } from "./password.service.js";

describe("Password Service", () => {
  beforeEach(() => {
    let passwordService = passwordService;
  });

  it("should be defined", () => {
    expect(passwordService).toBeDefined();
  });

  it("should create a password", async () => {
    const password = "Password@123";
    const createdPassword = await passwordService.create(password);
    expect(createdPassword.password).toBe(password);
  });
  it("should not create a password", async () => {
    const password = "password";
    try {
      await passwordService.create(password);
    } catch (error) {
      expect(error.message).toBe("Password not created");
    }
  });
  it("should not create a password with less than 8 characters", async () => {
    const password = "Pass@1";
    try {
      await passwordService.create(password);
    } catch (error) {
      expect(error.message).toBe("Password not created");
    }
  });
  it("should not create a password with more than 200 characters", async () => {
    const password = "Pass@1akfnaafaf14g564dsg30sgfs,ds2,1231d2fg1ds21ds23g1s2g31rt14351sdfsdfsdfdsfs"
    try {
      await passwordService.create(password);
    } catch (error) {
      expect(error.message).toBe("Password not created");
    }
  });
});
