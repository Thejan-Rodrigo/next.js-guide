// app/timeline/page.tsx (or page.jsx)

"use client";
import React from "react";
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
  return (
    <div style={{ padding: "40px" }}>
      <Typography variant="h4" gutterBottom>
        Sample Timeline
      </Typography>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} style={{ padding: "6px 16px" }}>
              <Typography variant="h6" component="h1">
                Event One
              </Typography>
              <Typography>Start of the journey</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} style={{ padding: "6px 16px" }}>
              <Typography variant="h6" component="h1">
                Event Two
              </Typography>
              <Typography>Reached checkpoint A</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            11:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} style={{ padding: "6px 16px" }}>
              <Typography variant="h6" component="h1">
                Event Three
              </Typography>
              <Typography>Completed the journey</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
