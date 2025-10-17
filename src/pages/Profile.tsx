import { motion } from 'framer-motion';
import { User, Package, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Profile = () => {
  const navigate = useNavigate();

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2025-01-15',
      status: 'Delivered',
      total: 1199,
      items: 2,
    },
    {
      id: 'ORD-002',
      date: '2025-01-10',
      status: 'In Transit',
      total: 649,
      items: 1,
    },
  ];

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/auth');
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <p className="text-muted-foreground">john.doe@example.com</p>
                <p className="text-muted-foreground">+94 70 558 8789</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="orders">
                <Package className="w-4 h-4 mr-2" />
                My Orders
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <div className="space-y-4">
                {mockOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-2xl"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{order.id}</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {order.items} {order.items === 1 ? 'item' : 'items'}
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}
                        >
                          {order.status}
                        </div>
                        <p className="text-xl font-bold">${order.total}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {order.status === 'Delivered' && (
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="glass-card p-6 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp">WhatsApp Number</Label>
                      <Input id="whatsapp" defaultValue="+94 70 558 8789" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Alternate Number</Label>
                      <Input id="phone" defaultValue="+94 11 234 5678" />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="glow-button">
                      Save Changes
                    </Button>
                    <Button type="button" variant="outline" onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
