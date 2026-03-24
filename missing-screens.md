# Sivagami Food App — Missing Screens & Flow Gaps

## App Overview
A **food ordering & dine-in booking app** that lets users discover nearby restaurants, browse menus, order food for delivery, and reserve tables for dine-in experiences.

---

## Existing Screens (8)
| # | Screen | Purpose |
|---|--------|---------|
| 1 | Splash Screen 1 | Onboarding slide 1 |
| 2 | Splash Screen 2 | Onboarding slide 2 |
| 3 | Splash Screen 3 | Onboarding slide 3 |
| 4 | Home Screen | Restaurant discovery with map |
| 5 | Menu Screen | Browse food items, add to cart |
| 6 | Food Details | Individual item info, allergens |
| 7 | Cart (Checkout) | Review cart, delivery options |
| 8 | Booking Summary | Dine-in reservation summary |

---

## Missing Screens

### 1. Authentication Flow
> Comes right after Splash Screens, before Home Screen

| Screen | Description |
|--------|-------------|
| **Login** | Phone number or email input with orange "Continue" button. Option to "Sign up" for new users. Keep it minimal — single input field, same rounded orange button style. |
| **OTP Verification** | 4–6 digit OTP input boxes. Timer for resend. Same white background with orange accents. Back arrow top-left like Booking Summary. |
| **Sign Up** | Name, email, phone number fields. Same form style as Booking Summary card rows. Orange "Create Account" button at bottom. |

---

### 2. Profile & Settings
> Accessible from Home Screen (add a profile icon in the top-right of the orange header)

| Screen | Description |
|--------|-------------|
| **User Profile** | Profile photo circle at top, name, phone, email displayed in the same white card row style as Booking Summary (label left, value right, gray dividers). Edit icon top-right. Orange "Log Out" button at bottom. |
| **Edit Profile** | Editable version of the profile card. Input fields for name, email, phone. Same rounded input style as the search bars. Orange "Save" button. |
| **Saved Addresses** | List of saved delivery addresses in white cards. Each card shows address label (Home/Work/Other), full address, and edit/delete icons in orange. Orange "+ Add New Address" link at bottom (same style as "+ Add Items" in Cart). |
| **Add/Edit Address** | Map at top (same Carto tile style as Home Screen), pin to select location. Below: input fields for flat/building, street, landmark, label selector pills (Home/Work/Other in orange outline style like "Dine Booking" tab). Orange "Save Address" button. |

---

### 3. Restaurant Discovery
> Extends the Home Screen flow

| Screen | Description |
|--------|-------------|
| **Search Results** | White background. Search bar at top (same style as Home Screen). List of restaurant cards below — each card matches the "Tasty bowl" card style: restaurant image (rounded rect), name, delivery time, rating star, distance, timing. |
| **Filters & Sort** | Bottom sheet or full screen. Filter chips in orange outline pill style (like allergen tags in Food Details): Cuisine type, Rating, Distance, Price range, Veg/Non-veg toggle. Orange "Apply Filters" button at bottom. |
| **Restaurant Detail** | Hero image banner at top (full width, like Food Details image). Restaurant name, rating, delivery time, distance below. Address row with location pin (same style as Tasty bowl card). Tab bar: "Food Menu" / "Dine Booking" / "Reviews" (reuse the existing tab pill style). This screen bridges Home Screen → Menu Screen. |

---

### 4. Dine Booking Flow
> The "Dine Booking" tab exists on Menu Screen but has no dedicated screens

| Screen | Description |
|--------|-------------|
| **Dine Booking Form** | Same white background as Booking Summary. Form fields in white card with gray dividers: Date picker, Time picker, Number of members (use the +/- quantity selector style from Menu Screen), Special requests text area. Orange "Book Table" button at bottom. |
| **Table Selection** | Floor plan or grid view of available tables. Available tables in orange outline, booked tables in gray. Selected table filled orange. Table number and capacity shown. Orange "Confirm Table" button. |
| **Booking Confirmation** | Success state. Large orange checkmark circle at top center. "Booking Confirmed!" heading. White card with booking details (same row style as Booking Summary: date, time, members, table number). Orange "View Booking" and outline "Back to Home" buttons. |

---

### 5. Order & Payment Flow
> Between Cart and order completion

| Screen | Description |
|--------|-------------|
| **Select Address** | List of saved addresses in white cards (same card style as cart items with cream background). Selected address has orange left border. Orange "+ Add New Address" at bottom. "Deliver Here" orange button. |
| **Payment Methods** | White card rows for each method: UPI, Credit/Debit Card, Net Banking, Cash on Delivery. Each row has a payment icon left, method name, and radio button right (same radio style as delivery options in Cart). Selected method gets orange filled radio. Orange "Pay ₹XXX" button at bottom. |
| **Order Success** | Clean white screen. Large orange checkmark icon centered. "Order Placed Successfully!" bold heading. Order ID in gray. Estimated delivery time in orange. White card with order summary. Two buttons: Orange "Track Order" and outline "Back to Home". |

---

### 6. Order Tracking & History
> Post-order experience

| Screen | Description |
|--------|-------------|
| **Order Tracking** | Map at top (same Carto tile style) showing delivery route with orange dotted path and delivery pin. Below: vertical stepper/timeline with steps — Order Placed, Preparing, Out for Delivery, Delivered. Active step in orange, completed steps with orange checkmarks, pending in gray. Delivery partner info card at bottom with call icon. |
| **Order History** | List view. Each order is a white card showing: restaurant name, date, item count, total amount, and order status pill (Delivered in green, Cancelled in red — same pill style as "Food Menu" tab). Tap to view details. |
| **Order Detail** | Reuses Booking Summary layout. White card with rows: Order ID, restaurant name, items list with quantities and prices, subtotal, discount, total in orange. "Reorder" orange button at bottom. |

---

### 7. Ratings & Reviews
> After order delivery

| Screen | Description |
|--------|-------------|
| **Rate Order** | Bottom sheet or full screen. Restaurant name at top. 5 empty stars in a row (tap to fill in orange/gold, same star style as Food Details ★ 4.5). Text area for review. Tags to select: "Great Food", "Fast Delivery", "Good Packaging" in orange outline pills (same style as allergen tags). Orange "Submit" button. |
| **Reviews List** | Scrollable list under Restaurant Detail "Reviews" tab. Each review: user avatar circle, name, star rating, date, review text. Same spacing and typography as food item rows. |

---

### 8. Offers & Notifications
> Engagement features

| Screen | Description |
|--------|-------------|
| **Offers / Coupons** | List of offer cards. Each card: gradient orange-to-amber background, offer title bold white, description, coupon code in dashed border box, "Apply" button. Or white cards with orange accent border left side. |
| **Notifications** | List of notification rows. Each row: icon circle left (orange for orders, green for offers), title bold, description gray, timestamp right. Unread items have light orange background (same cream as cart item cards). |

---

### 9. Miscellaneous
| Screen | Description |
|--------|-------------|
| **Favorites / Saved** | Grid or list of saved restaurants. Reuse the restaurant card style from Search Results. Heart icon in orange on each card. Empty state: illustration + "No favorites yet" + orange "Explore Restaurants" button. |
| **Help & Support** | FAQ accordion sections (reuse the collapsed section style from Menu Screen — "Gravies ▼", "Rice & Noodles ▼"). Contact options at bottom: Call, Email, Chat — each in a white card with icon and label. |
| **About Restaurant** | Extended info panel: full address on map, phone number, opening hours, cuisine tags (orange pills), photo gallery grid. |

---

## Recommended Screen Priority

### Must Have (MVP)
1. Login + OTP Verification
2. Payment Methods
3. Order Success
4. Order Tracking
5. Dine Booking Form
6. Booking Confirmation

### Should Have
7. Search Results + Filters
8. Restaurant Detail
9. Select Address
10. Order History
11. User Profile

### Nice to Have
12. Rate Order
13. Offers / Coupons
14. Notifications
15. Favorites
16. Help & Support
17. Table Selection
18. Reviews List

---

## Design Pattern Reference

All new screens should follow the established design system:

- **Font**: Poppins (all weights available)
- **Primary color**: `#F48C2D` (orange — buttons, accents, active states)
- **Background**: `#F5F5F0` (warm off-white) or `#FFFFFF`
- **Card background**: `#FFFFFF` with subtle shadow, rounded 12–16px
- **Cart item cards**: `#FFF5E6` (light cream/yellow)
- **Text primary**: `#1A1A1A` or `#2D2D2D`
- **Text secondary**: `#888888`
- **Price text**: `#F48C2D` (orange)
- **Veg indicator**: Green square `#4CAF50`
- **Non-veg indicator**: Red square `#E53935`
- **Dividers**: `#E8E8E8` (light gray, 1px)
- **Buttons**: Filled orange `#F48C2D`, white text, rounded 25–30px, full width
- **Outline buttons**: White fill, orange border, orange text, same radius
- **Input fields**: White background, light gray border, rounded 20–25px
- **Tab pills**: Active = filled orange, Inactive = gray border outline
- **Quantity selector**: Orange outline `- 1 +` with filled orange circles for +/−
- **Status bar**: Always present — "9:41" left, signal/wifi/battery right
- **Navigation**: Back arrow `←` top-left, title centered
- **Screen size**: 390 × 844px (iPhone 14 / standard mobile)
