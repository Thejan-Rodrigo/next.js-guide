"use client";
import React from "react";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";

export default function TimelinePage() {
    const data = [
        {
            Date: "2019 Jan",
            Title: "Job Started",
            BU: "xxxxxx",
            DU: "xxxxxx",
            TI: "xxxxxx",
        },
        {
            Date: "2023 Jun",
            Title: "Vacation",
            BU: "xxxxxx",
            DU: "xxxxxx",
            TI: "xxxxxx",
        },
        {
            Date: "2024 Dec",
            Title: "Vacation",
            BU: "xxxxxx",
            DU: "xxxxxx",
            TI: "xxxxxx",
        },
    ];

    return (
        <div style={{ padding: "40px" }}>
            <Typography variant="h4" gutterBottom>
                Sample Timeline
            </Typography>

            {/* <Timeline position="alternate">
                {data.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent color="text.secondary">
                            {item.Date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={index % 2 === 0 ? "primary" : "secondary"} />
                            {index < data.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} style={{ padding: "6px 16px" }}>
                                <Typography variant="h6" component="h1">
                                    {item.Title}
                                </Typography>
                            </Paper>
                            <Paper elevation={3} style={{ padding: "6px 16px" }}>
                                <Typography>BU: {item.BU}</Typography>
                                <Typography>DU: {item.DU}</Typography>
                                <Typography>TI: {item.TI}</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline> */}

            <div>
                <Timeline position="alternate">
                    {data.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                {item.Date}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot style={{ backgroundColor: "#FF5F1F	" }}>
                                    <FastfoodIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <div
                                    style={{
                                        backgroundColor: '#f5f5f5',
                                        padding: '10px 14px',
                                        borderRadius: '6px',
                                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <Typography variant="h6" component="span">
                                        {item.Title}
                                    </Typography>
                                </div>

                                <div
                                    style={{
                                        backgroundColor: '#f5f5f5',
                                        padding: '10px 14px',
                                        borderRadius: '6px',
                                        marginTop: '10px',
                                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <Typography>
                                        BU: {item.BU} <br />
                                        DU: {item.DU} <br />
                                        TI: {item.TI}
                                    </Typography>
                                </div>
                            </TimelineContent>

                        </TimelineItem>

                    ))}
                </Timeline>

            </div>
        </div>
    );
}
