import React from 'react';
import { charityName } from '../config.json';

window.omnibar.register('event-benefactor', ({ data, isLocked, isActive, isTransitioning, isOverlay }) => (
  <div className="benefactor-container">
    <div class="benefactor-copy">
      <div className="event-name">PSR Diversity is proud to support</div>
      <div className="benefactor-name">{charityName}</div>
    </div>
    <div class="donate-cta">
      Type<span class="donate-command">!donate</span>in chat to donate now!
    </div>
  </div>
));
