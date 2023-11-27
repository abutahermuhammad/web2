import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

/**
 * Middleware function to log the IP address of the incoming request.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
const logger = (req: Request, res: Response, next: NextFunction) => {
    const logLine = `${req.method} ${req.url} ${req.ip}`;
    console.log(logLine);
    next();
}
app.use(logger)


// API endpoints with `Router()`
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("Hello, World!");
    } catch (error) {
        next()
    }
});

app.use("/api", router);

app.get("/:userId", (req: Request, res: Response) => {
    console.log(req.params);
    console.log(req.query);
    res.send("Hello, World!");
});

app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        success: true,
        data: req.body
    });
});

// Global Error Handler
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: err
        })
    }
});

export default app;