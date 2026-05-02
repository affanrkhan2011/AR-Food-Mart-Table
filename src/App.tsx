/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import CustomerApp from './pages/CustomerApp';
import StaffDashboard from './pages/StaffDashboard';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CustomerApp />} />
        <Route path="/staff12345" element={<StaffDashboard />} />
      </Routes>
    </HashRouter>
  );
}
