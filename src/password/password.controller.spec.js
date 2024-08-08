import { describe, it, expect, beforeEach, jest } from "@jest/globals";
import { passwordController } from "./password.controller.js";

describe("Password Controller", () => {
  beforeEach(() => {
    let passwordController = passwordController;
  });

  it("should be defined", () => {
    expect(passwordController).toBeDefined();
  });

  it("should create a password", async () => {
    const req = {
      body: {
        password: "Password@123",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await passwordController.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });
  it("should not create a password", async () => {
    const req = {
      body: {
        password: "password",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await passwordController.create(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalled();
  });
  it("should not create a password with less than 8 characters", async () => {
    const req = {
      body: {
        password: "Pass@1",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await passwordController.create(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalled();
  });
  it("should not create a password with more than 200 characters", async () => {
    const req = {
      body: {
        password:
          "Pass@1akfnaafaf14g564dsg30sgfs,ds2,1231d2fg1ds21ds23g1s2g31rt14351sdfsdfsdfdsfsfdf4d15sf16851g0f2,f032fb32fdgfjshajofdsjdgsrghfpgfhgrthu8jegehgeh5t6h48h41h2h0d2h3d3hd1hd6h4d65hd4h6dh6dh56dhd4h6d4hhassadadasda",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await passwordController.create(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalled();
  });
});
