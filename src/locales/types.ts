/**
 * Locale interface for schedule-task-mcp i18n
 */
export interface Locale {
  /** Locale code for Intl.DateTimeFormat (e.g. 'de-CH', 'en-US', 'zh-CN') */
  dateLocale: string;

  // Fallback strings
  noRecords: string;
  unknown: string;
  none: string;

  // Task status mappings
  status: {
    scheduled: string;
    running: string;
    paused: string;
    completed: string;
    error: string;
  };

  // Last execution status
  lastStatus: {
    success: string;
    error: string;
    running: string;
  };

  // Trigger type descriptions
  trigger: {
    interval: string;
    intervalNoConfig: string;
    cron: string;
    date: string;
  };

  // Task summary labels
  labels: {
    taskAction: (title: string, action: string) => string;
    taskId: string;
    triggerType: string;
    cronExpression: string;
    intervalConfig: string;
    executionTime: string;
    instruction: string;
    legacyMcp: string;
    taskStatus: string;
    enabled: string;
    enabledYes: string;
    enabledNo: string;
    createdAt: string;
    updatedAt: string;
    lastRun: string;
    lastRunStatus: string;
    lastRunMessage: string;
    nextRun: string;
    historyCount: string;
    latestHistory: string;
    notScheduled: string;
    notSpecified: string;
  };

  // Action labels (used in responses)
  actions: {
    created: string;
    currentStatus: string;
    taskDetails: string;
    updated: string;
    deleted: string;
    deletedNote: string;
    historyCleared: string;
    paused: string;
    resumed: string;
    manualExecution: string;
  };
}
